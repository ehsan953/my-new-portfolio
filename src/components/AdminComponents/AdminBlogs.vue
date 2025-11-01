<template>
  <div>
    <!-- Header -->
    <div class="flex justify-between items-center mb-12">
      <h2 class="text-3xl font-bold text-[#00A8CD]">Blogs</h2>
      <v-btn color="#00A8CD" dark @click="dialog = true">+ Add Blog</v-btn>
    </div>

    <!-- Data Table -->
    <div class="overflow-x-auto bg-gray-900 rounded-lg shadow-lg relative">
      <table class="w-full text-left border-collapse">
        <thead class="bg-gray-800">
          <tr>
            <th class="px-6 py-4">Image</th>
            <th class="px-6 py-4">Title</th>
            <th class="px-6 py-4">Author</th>
            <th class="px-6 py-4">Date</th>
            <th class="px-6 py-4">Status</th>
            <th class="px-6 py-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in paginatedData"
            :key="item.id"
            class="border-b-2 border-gray-800 hover:bg-gray-800"
          >
            <td class="px-6 py-3">
              <img
                :src="item.image || '/blog_imgs/blog-default-img2.png'"
                alt="Cover"
                class="w-24 h-16 object-cover rounded"
              />
            </td>

            <td class="px-6 py-3">{{ item.title }}</td>
            <td class="px-6 py-3">{{ item.author }}</td>
            <td class="px-6 py-3">{{ formatDate(item.date) }}</td>
            <td class="px-6 py-3">
              <span
                :class="item.status === 'Active' ? 'text-green-400' : 'text-red-400'"
                class="font-semibold"
              >
                {{ item.status }}
              </span>
            </td>
            <td class="px-6 py-3 text-right relative">
              <button @click="toggleMenu(index, $event)" class="p-2 rounded hover:bg-gray-700">⋮</button>
              <div
                v-if="openMenu === index"
                class="fixed right-10 mt-2 w-40 bg-gray-800 rounded shadow-lg z-50"
                :style="{ top: dropdownY + 'px' }"
              >
                <button class="w-full px-4 py-2 text-left hover:bg-gray-700" @click="editItem(item)">
                  ✏️ Edit
                </button>
                <button class="w-full px-4 py-2 text-left hover:bg-gray-700" @click="deleteItem(item)">
                  🗑️ Delete
                </button>
                <button class="w-full px-4 py-2 text-left hover:bg-gray-700" @click="toggleStatus(item)">
                  🔄 {{ item.status === 'Active' ? 'Set Inactive' : 'Set Active' }}
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <div class="flex justify-center items-center mt-6 space-x-2">
      <button
        class="px-3 py-1 bg-gray-800 rounded hover:bg-gray-700 disabled:opacity-50"
        @click="prevPage"
        :disabled="currentPage === 1"
      >
        &lt;
      </button>

      <button
        v-for="page in totalPages"
        :key="page"
        class="px-3 py-1 rounded"
        :class="currentPage === page ? 'bg-[#00A8CD] text-white' : 'bg-gray-800 hover:bg-gray-700'"
        @click="currentPage = page"
      >
        {{ page }}
      </button>

      <button
        class="px-3 py-1 bg-gray-800 rounded hover:bg-gray-700 disabled:opacity-50"
        @click="nextPage"
        :disabled="currentPage === totalPages"
      >
        &gt;
      </button>
    </div>

    <!-- Add Blog Dialog -->
    <v-dialog v-model="dialog" max-width="700px">
      <div class="border-2 border-gray-800 bg-black text-white pa-2 rounded-lg overflow-auto">
        <v-card-title class="text-h6 font-bold text-[#00A8CD]">{{ editMode ? "Edit Blog" : "Add New Blog" }}</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="newBlog.title"
              label="Title (max 50 characters)"
              outlined
              dense
              counter="50"
              maxlength="50"
              required
            ></v-text-field>
            <v-text-field
              v-model="newBlog.author"
              label="Author"
              outlined
              dense
              required
            ></v-text-field>

            <QuillEditor
              v-model:content="newBlog.content"
              content-type="html"
              theme="snow"
              class="bg-white text-black rounded-lg mt-4"
              style="min-height: 200px"
              placeholder="Write your blog here..."
            ></QuillEditor>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="dialog = false">Cancel</v-btn>
          <v-btn color="#00A8CD" dark @click="editMode ? updateBlog() : addBlog()">{{ editMode ? "Update" : "Submit" }}</v-btn>
        </v-card-actions>
      </div>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  deleteDoc,
  doc,
  updateDoc,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../utils/firebaseConfig";

export default defineComponent({
  name: "AdminBlogs",
  components: { QuillEditor },
  data() {
    return {
      dialog: false,
      openMenu: null as number | null,
      currentPage: 1,
      itemsPerPage: 10,
      tableData: [] as any[],
      newBlog: { title: "", author: "", content: "" },
      editMode: false,
      editingId: null as string | null,
      dropdownY: 0,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.tableData.length / this.itemsPerPage);
    },
    paginatedData() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.tableData.slice(start, start + this.itemsPerPage);
    },
  },
  methods: {
    formatDate(date: any) {
      if (!date) return "";
      if (date.toDate) return date.toDate().toISOString().split("T")[0];
      return date;
    },
    toggleMenu(index: number, event: MouseEvent) {
      const button = event.currentTarget as HTMLElement;
      const rect = button.getBoundingClientRect();
      this.dropdownY = rect.bottom + window.scrollY;
      this.openMenu = this.openMenu === index ? null : index;
    },
    async deleteItem(item: any) {
      if (confirm(`Delete blog "${item.title}"?`)) {
        await deleteDoc(doc(db, "blogs", item.id));
      }
      this.openMenu = null;
    },
    async toggleStatus(item: any) {
      const newStatus = item.status === "Active" ? "Inactive" : "Active";
      await updateDoc(doc(db, "blogs", item.id), { status: newStatus });
      this.openMenu = null;
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
    async addBlog() {
      const content = this.newBlog.content || "";
      const plainText = content.replace(/<p><br><\/p>/g, "").replace(/<[^>]*>/g, "").trim();
      if (!this.newBlog.title || !this.newBlog.author || !plainText) {
        alert("Please fill all required fields!");
        return;
      }

      await addDoc(collection(db, "blogs"), {
        title: this.newBlog.title,
        author: this.newBlog.author,
        content: this.newBlog.content,
        date: serverTimestamp(),
        status: "Active",
        image: "/blog_imgs/blog-default-img2.png",
      });

      this.resetDialog();
    },

    editItem(item: any) {
      this.newBlog = {
        title: item.title,
        author: item.author,
        content: item.content,
      };
      this.editMode = true;
      this.editingId = item.id;
      this.dialog = true;
      this.openMenu = null;
    },

    async updateBlog() {
      if (!this.editingId) return;

      await updateDoc(doc(db, "blogs", this.editingId), {
        title: this.newBlog.title,
        author: this.newBlog.author,
        content: this.newBlog.content,
      });

      this.resetDialog();
    },

    resetDialog() {
      this.newBlog = { title: "", author: "", content: "" };
      this.dialog = false;
      this.editMode = false;
      this.editingId = null;
    },
  },
  mounted() {
    const q = query(collection(db, "blogs"), orderBy("date", "desc"));
    onSnapshot(q, (snapshot) => {
      this.tableData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    });
  },
});
</script>
