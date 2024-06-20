pizza_list_array = [];

function getmenu()
	{    
        // Da un nombre apropiado de identificación como nombre_pizza.
        var item = document.getElementById("        ").value; 
       
        //Agrega la función push() para llevar los elementos al array.
        pizza_list_array.push(nombre_pizza);
        
        var remove_commas = pizza_list_array.join("<br># ");
        document.getElementById("mostrar_menú").innerHTML =  "# " + remove_commas;
	}