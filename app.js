document.addEventListener("DOMContentLoaded", function() {
    const editor = document.querySelector("#editor");
    const preview = document.querySelector("#preview");
    
    const boldBtn = document.querySelector("#boldBtn");
    const italicBtn = document.querySelector("#italicBtn");
    const codeBtn = document.querySelector("#codeBtn");
    const headerBtn = document.querySelector("#headerBtn");
    const linkBtn = document.querySelector("#linkBtn");
    const imageBtn = document.querySelector("#imageBtn");
    const quoteBtn = document.querySelector("#quoteBtn");
    const listBtn = document.querySelector("#listBtn");
    const ulBtn = document.querySelector("#ulBtn");
    const olBtn = document.querySelector("#olBtn");

    boldBtn.addEventListener("click", () => {
        const startPos = editor.selectionStart;
        const endPos = editor.selectionEnd;
        editor.value =
          editor.value.substring(0, startPos) + "**" + editor.value.substring(startPos, endPos) + "**" + editor.value.substring(endPos);
        editor.focus();
        editor.selectionStart = startPos + 2;
        editor.selectionEnd = endPos + 2;
      });
    
      italicBtn.addEventListener("click", () => {
        const pos = editor.selectionStart;
        editor.value =
          editor.value.substring(0, pos) + "_" + editor.value.substring(pos);
        editor.focus();
        editor.setSelectionRange(pos + 1, pos + 1);
      });
      
      codeBtn.addEventListener("click", () => {
        const pos = editor.selectionStart;
        editor.value =
          editor.value.substring(0, pos) + "`" + editor.value.substring(pos);
        editor.focus();
        editor.setSelectionRange(pos + 1, pos + 1);
      });
      
      headerBtn.addEventListener("click", () => {
        const pos = editor.selectionStart;
        editor.value =
          editor.value.substring(0, pos) + "# " + editor.value.substring(pos);
        editor.focus();
        editor.setSelectionRange(pos + 2, pos + 2);
      });
      
      linkBtn.addEventListener("click", () => {
        const pos = editor.selectionStart;
        editor.value =
          editor.value.substring(0, pos) +
          "[Link Text](http://)" +
          editor.value.substring(pos);
        editor.focus();
        editor.setSelectionRange(pos + 1, pos + 10);
      });
      
      imageBtn.addEventListener("click", () => {
        const pos = editor.selectionStart;
        editor.value =
          editor.value.substring(0, pos) +
          "![Alt Text](http://)" +
          editor.value.substring(pos);
        editor.focus();
        editor.setSelectionRange(pos + 2, pos + 9);
      });
      
      quoteBtn.addEventListener("click", () => {
        const pos = editor.selectionStart;
        editor.value =
          editor.value.substring(0, pos) + "> " + editor.value.substring(pos);
        editor.focus();
        editor.setSelectionRange(pos + 2, pos + 2);
      });
      
      listBtn.addEventListener("click", () => {
        const pos = editor.selectionStart;
        editor.value =
          editor.value.substring(0, pos) + "- " + editor.value.substring(pos);
        editor.focus();
        editor.setSelectionRange(pos + 2, pos + 2);
      });
      
      ulBtn.addEventListener("click", () => {
        const pos = editor.selectionStart;
        editor.value =
          editor.value.substring(0, pos) + "\n- " + editor.value.substring(pos);
        editor.focus();
        editor.setSelectionRange(pos + 3, pos + 3);
      });
      
      olBtn.addEventListener("click", () => {
        const pos = editor.selectionStart;
        editor.value =
          editor.value.substring(0, pos) + "\n1. " + editor.value.substring(pos);
        editor.focus();
        editor.setSelectionRange(pos + 4, pos + 4);
      });
      
      
    
    
    
    const convertBtn = document.querySelector("#convertBtn");
    
    convertBtn.addEventListener("click", () => {
      const text = editor.value;
      const html = marked.parse(text);
      preview.innerHTML = html;
    });

    //download
    const downloadBtn = document.getElementById('downloadBtn');

  downloadBtn.addEventListener('click', () => {
    const file = new Blob([editor.value], { type: 'text/markdown' });
    const a = document.createElement('a');
    const url = URL.createObjectURL(file);
    a.href = url;
    a.download = 'markdown.md';
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 0);
  });
    
});