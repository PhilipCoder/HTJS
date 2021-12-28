//The view function
let view = async (model) => {
    //Create a data collection called data
    model.data = { toBind: "It works!" };
    //Binds the heading to the "toBind" property on the data set
    model.$heading.bind = () => model.data.toBind;

    model.categories = [
        {id: 1, name: "First Category", description: "Since it is the first category, it is the best."},
        {id: 2, name: "Second Category", description: "This category is last. It sucks."}
    ];
    //Define the repeat binding.
    model.$categoryCard.repeat = () => model.categories;
    //Initiate the repeat binding
     model.$categoryCard.repeat = (elements, rowIndex) => {
            elements.$title.bind = () => model.categories[rowIndex].name;
            elements.$description.bind = () => model.categories[rowIndex].description;
            elements.$editCategory.onclick.event = () => {
                alert(`Item with ID ${model.categories[rowIndex].id} clicked!`);
            };
     };

     model.$navigate.onclick.event = () =>{

        model.location.navigate("/details/details",{id:90, action:"delete"});
     };
};
//Exports the view function
export {view};