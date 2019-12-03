$(function () {

    var url = "/api/products";

    // Get data when first time open
    getData();

    function getData(){
        $("#plist").empty();

        $.post(url, function (data, status) {
            if (status == 'success') {
                $.each(data, function (index, item) {
                    console.log(index + ' : ' + item['name']);
                    $('#plist').append(`<tr>
                                            <td><img src="${item['photo']}"></td>
                                            <td>${item['serialno']}</td>
                                            <td>${item['name']}</td>
                                            <td>${item['category']}</td>
                                            <td>${item['price']}</td>
                                            
                                            </tr>`);
        
                });
            }
        });
        // #12 Get all products and display as a table
        // use $.get
      
        // ===============================
    }
    
    // Update photo when URL has changed
    $("#photo").change(function(){
        $("#preview").attr("src", $("#photo").val());
    })

    // Add new product by calling api
    $("#savenewproduct").click(function () {
        var newproduct = {
            serialno: $("#serialno").val(),
            name: $("#name").val(),
            category: $("#category").val(),
            price: $("#price").val(),
            photo: $("#photo").val()
        }

        // #13 Add new products by calling api
        // use $.post
        $.post(url, function(newproduct, status){
            alert("Data: " + newproduct + " Status: " + status);
          });
        // ===============================

    });
})