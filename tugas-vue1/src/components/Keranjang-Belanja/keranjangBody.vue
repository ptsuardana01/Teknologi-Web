<template>
  <div id="container" class="w-full flex bg-indigo-100">
    <div class="w-96 flex-1 flex justify-center items-center flex-col">
      <h1 class="py-4">Order</h1>
      <form
        @submit.prevent="addNewProduct"
        class="bg-blue-400 w-80 rounded-lg p-10 h-96"
      >
        <table>
          <tr>
            <td>ID Barang</td>
          </tr>

          <tr>
            <td>
              <input
                class="py-0.5 px-2.5 rounded-sm my-1 w-60"
                v-model="input.id"
                type="text"
                placeholder="Tulisakan Kode barang"
              />
            </td>
          </tr>

          <tr>
            <td>Nama Barang</td>
          </tr>

          <tr>
            <td>
              <input
                class="py-0.5 px-2.5 rounded-sm my-1 w-60"
                v-model="input.nama"
                type="text"
                placeholder="Tulisakan Nama Barang"
              />
            </td>
          </tr>

          <tr>
            <td>Tipe</td>
          </tr>

          <tr>
            <td>
              <select
                v-model="input.typeID"
                class="py-0.5 px-2.5 rounded-sm my-1 w-60"
              >
                <option v-for="item in items" :key="item.id">
                  {{ item.type }}
                </option>
              </select>
            </td>
          </tr>

          <tr>
            <td>Harga</td>
          </tr>

          <tr>
            <td>
              <input
                class="py-0.5 px-2.5 rounded-sm my-1 w-60"
                v-model="input.harga"
                type="text"
              />
            </td>
          </tr>

          <tr>
            <td colspan="3">
              <button
                class="
                  rounded-md
                  py-1
                  px-3
                  my-5
                  border-2
                  bottom-0
                  right-0
                  hover:bg-white
                "
                type="submit"
              >
                Masuk keranjang
              </button>
            </td>
          </tr>
        </table>
      </form>
    </div>

    <!-- dalam keranjang -->
    <div class="ml-8 border-white shadow-lg p-2">
      <h3 class="pt-3 pb-4 text-center">Dalam Keranjang</h3>
      <table class="">
        <thead>
          <tr class="text-md font-semibold tracking-wide text-center border-b shadow">
            <th class="bg-white text-center p-3">ID</th>
            <th class="bg-white text-center p-3">Barang</th>
            <th class="bg-white text-center p-3">Tipe</th>
            <th class="bg-white text-center p-3">Harga</th>
            <th class="bg-white text-center p-3 w-28">Quantity</th>
            <th class="bg-white text-center p-3">Total Harga</th>
            <th class="bg-white text-center p-3">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in products"
            :key="index"
            class="text-gray-700"
          >
            <td class="border text-center">
              {{ item.id }}
            </td>
            <td class="border text-center">
              {{ item.nama }}
            </td>
            <td class="border text-center">
              {{ getType(item.typeID) }}
            </td>
            <td class="border text-center">
              {{ item.harga }}
            </td>
            <td class="border flex justify-center items-center">
              <button
                class="
                  w-7
                  h-7
                  flex
                  justify-center
                  items-center
                  rounded-full
                  bg-red-400
                  text-white
                  hover:bg-red-600"
                @click="handleMinButton(item.id)"
                type="button"
              >
                -
              </button>
              <span class="mx-3">
                {{ item.qty }}
              </span>
              <button
                class="
                  w-7
                  h-7
                  flex
                  justify-center
                  items-center
                  rounded-full
                  bg-green-400
                  text-white
                  hover:bg-green-600
                "
                @click="handlePlusButton(item.id)"
                type="button"
              >
                +
              </button>
            </td>
            <td class="border text-center">
              {{ totalHarga(item.id) }}
            </td>
            <td class="border text-center">
              <button
                class="py-1 px-2 text-sm text-white bg-red-500 hover:bg-red-600 rounded-full"
                v-on:click="products.splice(index, 1)"
              >
                Remove
              </button>
              <button
                class="py-1 px-6 text-sm text-white bg-green-500 hover:bg-green-600 rounded-full"
                v-on:click="editProduct(index, item)"
              >
                Edit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  nama: "keranjangBody",
  data() {
    return {
      input: {
        qty: 1,
      },
      message: "",
      items: [
        {
          id: 1,
          type: "Minuman",
        },
        {
          id: 2,
          type: "Makanan",
        },
        {
          id: 3,
          type: "Alat Elektonik",
        },
        {
          id: 4,
          type: "Aksesoris",
        },
      ],
      products: [],
      tmp: null,
    };
  },
  methods: {
    addNewProduct: function () {
      if (this.tmp != null) {
        Object.assign(this.products[this.tmp], {
          id: this.input.id,
          nama: this.input.nama,
          typeID: this.input.typeID,
          harga: this.input.harga,
          qty: this.input.qty,
        });
      } else {
        this.products.push({
          id: this.input.id,
          nama: this.input.nama,
          typeID: this.input.typeID,
          harga: this.input.harga,
          qty: this.input.qty,
        });
      }
      this.input.id = "";
      this.input.nama = "";
      this.input.typeID = "";
      this.input.harga = "";
      this.tmp = null;
      this.input.qty = 1;
    },
    editProduct: function (tmp, p) {
      this.tmp = tmp;
      this.input.id = p.id;
      this.input.nama = p.nama;
      this.input.typeID = p.typeID;
      this.input.harga = p.harga;
      this.input.qty = p.qty;
    },
    getType: function (id) {
      return id;
    },
    getItem: function (id) {
      let res = this.products.filter((e) => {
        if (e.id == id) return e;
      });
      return res;
    },
    handlePlusButton: function (id) {
      this.getItem(id)[0].qty++;
    },
    handleMinButton: function (id) {
      if (this.getItem(id)[0].qty != 1) this.getItem(id)[0].qty--;
    },
    totalHarga: function (id) {
      let res = this.getItem(id);
      return res[0].qty * res[0].harga;
    },
  },
};
</script>

<style scoped>
#container {
  height: 90vh;
}
</style>