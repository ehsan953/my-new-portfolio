<template>
  <div>
    <!-- Header -->
    <div class="flex justify-between items-center mb-12">
      <h2 class="text-3xl font-bold text-[#00A8CD]">Blogs</h2>
      <v-btn color="#00A8CD" dark @click="dialog = true">+ Add Blog</v-btn>
    </div>

    <!-- Data Table -->
    <div class="overflow-x-auto bg-gray-900 rounded-lg shadow-lg">
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
            :key="index"
            class="border-b-2 border-gray-800 hover:bg-gray-800"
          >
            <!-- Image Column -->
            <td class="px-6 py-3">
              <img
                v-if="item.image"
                :src="item.image"
                alt="Cover"
                class="w-24 h-16 object-cover rounded"
              />
              <div
              v-else
              class="w-24 h-16 flex items-center justify-center bg-gray-700 text-gray-400 rounded"
              >
              <img
                src="/blog_imgs/blog_default_img.jpg"
                alt="Cover"
                class="w-24 h-16 object-cover rounded"
              />
              </div>
            </td>

            <td class="px-6 py-3">{{ item.title }}</td>
            <td class="px-6 py-3">{{ item.author }}</td>
            <td class="px-6 py-3">{{ item.date }}</td>
            <td class="px-6 py-3">
              <span
                :class="item.status === 'Active' ? 'text-green-400' : 'text-red-400'"
                class="font-semibold"
              >
                {{ item.status }}
              </span>
            </td>
            <td class="px-6 py-3 text-right relative">
              <button @click="toggleMenu(index)" class="p-2 rounded hover:bg-gray-700">
                ⋮
              </button>
              <!-- Action Menu -->
              <div
                v-if="openMenu === index"
                class="absolute right-6 mt-2 w-40 bg-gray-800 rounded shadow-lg z-10"
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

    <!-- Custom Pagination -->
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
      <div class="border-2 border-gray-800 bg-black text-white pa-2 rounded-lg">
        <v-card-title class="text-h6 font-bold text-[#00A8CD]">Add New Blog</v-card-title>
        <v-card-text>
          <v-form>
            <!-- Title (max 50 characters) -->
            <v-text-field
              v-model="newBlog.title"
              label="Title (max 50 characters)"
              outlined
              dense
              counter="50"
              maxlength="50"
              required
            ></v-text-field>

            <!-- Author -->
            <v-text-field
              v-model="newBlog.author"
              label="Author"
              outlined
              dense
              required
            ></v-text-field>

            <!-- Cover Image -->
            <v-file-input
              v-model="newBlog.coverImage"
              label="Upload Cover Image"
              outlined
              dense
              accept="image/*"
              prepend-icon=""
              @change="previewImage"
            ></v-file-input>

            <!-- Quill Editor -->
            <QuillEditor
              v-model="newBlog.content"
              theme="snow"
              class="bg-white text-black rounded-lg mt-4"
              style="min-height: 200px"
              placeholder="Write your blog here..."
            />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="dialog = false">Cancel</v-btn>
          <v-btn color="#00A8CD" dark @click="addBlog">Submit</v-btn>
        </v-card-actions>
      </div>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

export default defineComponent({
  name: "AdminBlogs",
  components: { QuillEditor },
  data() {
    return {
      dialog: false,
      openMenu: null as number | null,
      currentPage: 1,
      itemsPerPage: 10,
      tableData: [
        {
          title: "Mastering Vue 3",
          author: "John Doe",
          date: "2025-08-01",
          status: "Active",
          image: "/blog_imgs/blog-bg.jpg",
        },
        {
          title: "Tailwind CSS Tips",
          author: "Sarah Smith",
          date: "2025-08-05",
          status: "Inactive",
          image: "/blog_imgs/blog2.png",
        },
        {
          title: "Tailwind CSS Tips",
          author: "Sarah Smith",
          date: "2025-08-05",
          status: "Inactive",
          image: "/blog_imgs/blog3.jpg",
        },
      ],
      newBlog: { title: "", author: "", coverImage: null as File | null, content: "", imagePreview: null as string | null },
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
    previewImage(event: any) {
      const file = event.target.files?.[0];
      if (file) {
        this.newBlog.coverImage = file;
        this.newBlog.imagePreview = URL.createObjectURL(file);
      }
    },
    toggleMenu(index: number) {
      this.openMenu = this.openMenu === index ? null : index;
    },
    editItem(item: any) {
      alert(`Editing: ${item.title}`);
      this.openMenu = null;
    },
    deleteItem(item: any) {
      alert(`Deleting: ${item.title}`);
      this.openMenu = null;
    },
    toggleStatus(item: any) {
      item.status = item.status === "Active" ? "Inactive" : "Active";
      this.openMenu = null;
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
    addBlog() {
      if (!this.newBlog.title || !this.newBlog.author || !this.newBlog.content) {
        alert("Please fill all required fields!");
        return;
      }

      this.tableData.push({
        title: this.newBlog.title,
        author: this.newBlog.author,
        date: new Date().toISOString().split("T")[0],
        status: "Active",
        image: this.newBlog.imagePreview,
      });

      this.newBlog = { title: "", author: "", coverImage: null, content: "", imagePreview: null };
      this.dialog = false;
    },
  },
});
</script>
