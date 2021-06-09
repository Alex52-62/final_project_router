<template>
        <div class="popup_wrapper" ref="popup_wrapper">
        <div class="v-popup">
        <div class="v-popup__header">
        <span>{{popupTitle}}</span>
        <span>
            <i
            class="material-icons"
            @click="$emit('closePopup')"
            ><b>close</b></i>
        </span>
        </div>
        <div class="v-popup__content">
            <slot>

            </slot>
        </div>
        <div class="v-popup__footer">
        <button class="close_modal" @click="$emit('closePopup')">Close window</button>
          <button class="submit_btn" @click="$emit('PopupBuy')">Купить</button>
        </div>
        </div>
        </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'vpopup',
  props: {
    popupTitle: {
      type: String,
      default: 'Popup name',
    },
    inPopupBuy: {
      type: String,
      default: 'Ok',
    },
  },
  data() {
    return {
      isInfoPopupVisible: false,
    };
  },
  methods: {
    PopupBuy() {
      this.$emit('PopupBuy');
    },
    closePopup() {
      this.$emit('closePopup');
    },
  },
  mounted() {
    const vm = this;
    document.addEventListener('click', (item) => {
      if (item.target === vm.$refs.popup_wrapper) {
        vm.closePopup();
      }
    });
  },
};
</script>
