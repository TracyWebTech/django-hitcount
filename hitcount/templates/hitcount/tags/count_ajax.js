$.ajax({
  url: "{% url 'hitcount_update_ajax' %}",
  type: 'post',
  data: { hitcount_pk: '{{ hitcount_pk }}' },
  beforeSend: function(xhr, settings) {
    xhr.setRequestHeader("X-CSRFToken", $.cookie('csrftoken'));
  }
});
