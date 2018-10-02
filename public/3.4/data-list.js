(function() {

    let dataList = {
        output: document.getElementById('output'),
        fetchNames() {
            axios.get('data.json').then((res) => {
                this.renderNames(res.data);
            });

        },
        renderNames(names) {
            let listItems = names.map(name => `<li>${name.firstName} ${name.lastName}</li>`);

            this.output.innerHTML = listItems.join("");
        }
    };

    document.getElementById('get-names')
        .addEventListener('click', dataList.fetchNames.bind(dataList));

})();