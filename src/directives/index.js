/**
 * 指令
 */

export const directives = {
  focus: {
    inserted: function (el, binding) {
      el.focus()
      el.setAttribute('title', binding.value)
      el.title = binding.value
    }
  }
}