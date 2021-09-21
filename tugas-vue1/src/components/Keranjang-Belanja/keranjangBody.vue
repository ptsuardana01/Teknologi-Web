<template>
  <div id="container" class="w-full flex bg-indigo-100">
    <div class="w-96 flex-1 flex justify-center items-center flex-col">
      <h1 class="py-4">Keranjang belanja</h1>
      <form @submit.prevent="addNewProduct" class="bg-blue-400 w-3/5 rounded-lg p-10 h-96">
        <table>
          <tr>
            <td>ID Barang</td>
          </tr>

          <tr>
            <td>
              <input
                class="py-0.5 px-2.5 rounded-sm my-1 w-64"
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
                class="py-0.5 px-2.5 rounded-sm my-1 w-64"
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
              <select v-model="input.typeID" class="py-0.5 px-2.5 rounded-sm my-1 w-64">
                <option v-for="type in items" :key="type.id">
                  {{ type.type }}
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
                class="py-0.5 px-2.5 rounded-sm my-1 w-64"
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

    <div class="w-96 flex-1 flex justify-center items-center flex-col">
      <h1 class="py-4">Dalam Keranjang</h1>
      <table class="table-auto shadow-md bg-white">
        <thead>
          <tr>
            <th class="bg-green-300 border text-center px-6 py-1">ID</th>
            <th class="bg-green-300 border text-center px-6 py-1">
              Nama Barang
            </th>
            <th class="bg-green-300 border text-center px-6 py-1">Tipe</th>
            <th class="bg-green-300 border text-center px-6 py-1">Harga</th>
            <th class="bg-green-300 border text-center px-6 py-1">Quantity</th>
            <th class="bg-green-300 border text-center px-6 py-1">
              Total Harga
            </th>
            <th class="bg-green-300 border text-center px-6 py-1">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(list, index) in products" :key="index">
            <td class="border text-center px-6 py-2">{{ list.id }}</td>
            <td class="border text-center px-6 py-2">{{ list.nama }}</td>
            <td class="border text-center px-6 py-2">
              {{ getType(list.typeID) }}
            </td>
            <td class="border text-center px-6 py-2">{{ list.harga }}</td>
            <td
              class="
                border
                text-center
                px-6
                py-2
                w-28
                flex
                items-center
                justify-center
              "
            >
              <button
                class="
                  px-2
                  py-1
                  rounded-full
                  bg-red-600
                  text-white
                  hover:bg-red-500
                "
                @click="handleMinButton(list.id)"
                type="button"
              >
                -
              </button>
              <span class="mx-2">
                {{ list.qtyVal }}
              </span>
              <button
                class="
                  px-2
                  py-1
                  rounded-full
                  bg-blue-600
                  text-white
                  hover:bg-blue-500
                "
                @click="handlePlusButton(list.id)"
                type="button"
              >
                +
              </button>
            </td>
            <td class="border text-center px-6 py-2">
              {{ getHarga(list.id) }}
            </td>
            <td
              class="
                border
                text-center
                px-6
                py-2
                w-32
                flex
                items-center
                justify-center
              "
            >
              <button
                class="
                  px-2
                  py-1
                  rounded-full
                  bg-red-500
                  text-white
                  hover:bg-red-600
                "
                @click="lists.splice(index, 1)"
                type="button"
              >
                Hapus
              </button>
              <button
                class="
                  px-2
                  py-1
                  rounded-full
                  bg-yellow-400
                  text-white
                  hover:bg-yellow-500
                "
                @click="handleEditButton(index, list)"
                type="button"
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
  name: "keranjangBody",
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
        });
      } else {
        this.products.push({
          id: this.input.id,
          nama: this.input.nama,
          typeID: this.input.typeID,
          harga: this.input.harga,
        });
      }
      this.input.id = "";
      this.input.nama = "";
      this.input.typeID = "";
      this.input.harga = "";
      this.tmp = null;
    },
    editProduct: function (tmp, p) {
      this.tmp = tmp;
      this.input.id = p.id;
      this.input.nama = p.nama;
      this.input.typeID = p.typeID;
      this.input.harga = p.harga;
    },
    getType: function (id) {
      var m = this.items.filter(function (elem) {
        if (elem.id == id) return elem;
      });
      return m[0].type;
    },
  },
};
</script>

<style scoped>
#container {
  height: 90vh;
}
</style>