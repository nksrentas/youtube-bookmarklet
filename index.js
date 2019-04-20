javascript: (function () {
    let sidebar = document.getElementsByTagName('ytd-guide-section-renderer');
    let subscriptionMenu = sidebar[1];
    let searchDIV = document.createElement('div');
    let searchText = document.createTextNode('WELCOME TO KAPPA R E A L I T Y');
    let searchBar = document.createElement('input');
    let renderedSubcriptionChannelsDIV = subscriptionMenu.querySelectorAll('div.style-scope.ytd-guide-section-renderer ytd-guide-entry-renderer');
    Array.prototype.map.call(renderedSubcriptionChannelsDIV, function (data) {
        channelName = data.querySelector('a').title;
        console.log(": channelName", channelName);
    });
    searchBar.placeholder = "Search for channel...";
    searchBar.style.width = "100%";
    searchBar.style.padding = "5px";
    searchBar.addEventListener('keyup', (e) => {
        let filterValue = e.target.value.toUpperCase();
        console.log(filterValue);

    });
    searchDIV.appendChild(searchText);
    searchDIV.appendChild(searchBar);
    searchDIV.style.color = 'red';
    subscriptionMenu.insertBefore(searchDIV, subscriptionMenu.childNodes[2]);
})();