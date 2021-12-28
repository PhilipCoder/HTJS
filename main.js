(()=>{
    const callback = function(mutationsList, observer) {
        // Use traditional 'for loops' for IE 11
        for(const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                console.log('A child node has been added or removed.');
            }
            else if (mutation.type === 'attributes') {
                console.log('The ' + mutation.attributeName + ' attribute was modified.');
            }
        }
    };
    const config = { attributes: true, childList: true, subtree: true };
    const observer = new MutationObserver(callback);
    Object.defineProperty(DOMStringMap.prototype, 'click', {
        set: function() { console.log("value set"); return  true; }
      });
    observer.observe(document.body, config);
  
    const htmlToAppend = `<label>One</label>
    <div bind-visible="one.two">
        <div class="random">
            <button data-click="one.three" id = "one">
            </button>
        </div>
    </div>`;
    document.body.innerHTML = htmlToAppend;
    document.getElementById("one").dataset["click"]="aa";
})();