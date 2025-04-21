const uicomponent = {
    render:function(){
        console.log('UI Component rendered');
    },
    destroy:function(){
        console.log('UI Component destroyed');
    }
}

const button = Object.create(uicomponent);
button.onClick = function(){
    console.log('Button clicked');
}
button.render();
button.destroy();