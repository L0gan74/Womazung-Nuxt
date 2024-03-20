import {defineStore} from "pinia";
import type {ItemsCard} from "~/interface/Items";
import axios from "axios";

export const useItemsStore = defineStore('items', {
    state: () => ({
        items: [] as ItemsCard[],
        loading: false,
        error: null
    }),
    actions: {
        async fetchItems() {
            this.items = []
            this.loading = true
            try {
                const response = await axios.get('https://30fc9ac5f1c540d7.mokky.dev/items?limit=3')
                this.items = response.data
            } catch (error) {
                console.log(error)
            } finally {
                this.loading = false
            }
        }
    }
})