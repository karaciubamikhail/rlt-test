import {defineStore} from "pinia";
import {ref} from "vue";


export const mainStore = defineStore('cells', () => {
  const state = ref({
    items: [
      {
        id: 1,
        category: Number(localStorage.getItem('1')) || 1,
        src: '../src/assets/images/svg/itemImage.svg',
        count: '4'
      },
      {
        id: 2,
        category: Number(localStorage.getItem('2')) || 2,
        src: '../src/assets/images/svg/itemImage2.svg',
        count: '2'
      },
      {
        id: 3,
        category: Number(localStorage.getItem('3')) || 3,
        src: '../src/assets/images/svg/itemImage3.svg',
        count: '5'
      }
    ],
    cells: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
  })

  function deleteItem(id: number) {
    state.value.items = state.value.items.filter(x => x.id !== id)
  }


  return {
    state,
    deleteItem
  }
})
