(function($) {
  CKEDITOR.plugins.add('advhello', {
    'init': function(editor) {
      editor.addCommand('insert_txt', {
        'exec': function() {
          alert('hi there');
        }
      });

      editor.ui.addButton('insert_txt_button', {
        'label': 'Insert HelloWorld Text',
        'command': 'insert_txt',
        icon: this.path + 'icon.png'
      });
    }
  });
})(jQuery);
