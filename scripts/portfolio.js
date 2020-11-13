   //Creating a variable as a shortcut for printing
   const p = console.log;


    /* 
    Get all buttons in a NODE LIST of buttons (array like structure) */

        //Get the references to interactive HTML elements

        const ctrlBtns = document.querySelectorAll('.controls button i');
        const cntnr = document.querySelector('.container');
        p(ctrlBtns,cntnr);

        //Create array that will store the data

        let pages = [
        {
            heading:"WEB",
            img01: "./images/gallery/web/cafeThumb.jpg",
            img02: "./images/gallery/web/ngoThumb.jpg",
            img03: "./images/gallery/web/siberiansThumb.jpg",
            img04: "./images/gallery/web/roomfinderThumb.jpg",
            alt01: "Cafe",
            alt02: "NGO",
            alt03: "Siberians of the Heartland",
            alt04: "Project Roomfinder",
            dataTarget01: "#cafe",
            dataTarget02: "#ngo",
            dataTarget03: "#siberians",
            dataTarget04: "#roomfinder"
        },
        {
            heading:"DESIGN",
            img01: "./images/gallery/design/infographicThumb.jpg",
            img02: "./images/gallery/design/logoprocessThumb.jpg",
            img03: "./images/gallery/design/magazineThumb.jpg",
            img04: "./images/gallery/design/typographicPosterThumb.jpg",
            alt01: "Infographic",
            alt02: "Logo Design process",
            alt03: "Magazine",
            alt04: "Typographic Poster",
            dataTarget01: "#infographic",
            dataTarget02: "#logo",
            dataTarget03: "#magazine",
            dataTarget04: "#typographic"
        },
        {
            heading:"VIDEO",
            img01: "./images/gallery/video/demoThumbnail.jpg",
            img02: "./images/gallery/video/fallThumbnail.jpg",
            img03: "./images/gallery/video/gradeThumbnail.jpg",
            img04: "./images/gallery/video/gingerbreadThumbnail.jpg",
            alt01: "Demo Reel 2020",
            alt02: "An Autumn Minute",
            alt03: "The Grade",
            alt04: "Gingerbread Chocolate Truffles",
            dataTarget01: "#demo",
            dataTarget02: "#fall",
            dataTarget03: "#grade",
            dataTarget04: "#truffles"
        }
        ];


        //Create function that handles click event
        function clickBtn(ev){

            //Brightspace ref: week 6
            let clickedButton = ev.target;

            let btnsArray=[
            ctrlBtns[0],
            ctrlBtns[1],
            ctrlBtns[2],
            ];

            //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
            let index = btnsArray.indexOf(clickedButton);
            p(index);

            // /MDN ref:https://developer.mozilla.org/en-US/docs/Web/API/Element
            p(clickedButton.id);
            //handle moving id-active to the currently clicked button
                //remove currently present id 'active'
                for(let i=0; i < ctrlBtns.length ; i++){
                    if(ctrlBtns[i].id){
                        //MDN ref:https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute
                        ctrlBtns[i].removeAttribute('id')
                    }
                }
                //assign id="active" to currently clicked button
                clickedButton.id="active";
            //Load corresponding data into the container div
            cntnr.innerHTML = `
            <div class="slide-in-top">
            <hr>
            <h1 class="portfolioHeader">${pages[index].heading}</h1>
            <hr>


         <ul id="hexGrid">
      <li class="hex">
        <div class="hexIn">
          <a class="hexLink" href="#">
            <img src="${pages[index].img01}" data-toggle="modal" data-target="${pages[index].dataTarget01}" alt="${pages[index].alt01}"/>
            <h1>${pages[index].alt01}</h1>
          </a>
        </div>
      </li>
      <li class="hex">
        <div class="hexIn">
          <a class="hexLink" href="#">
            <img src="${pages[index].img02}" data-toggle="modal" data-target="${pages[index].dataTarget02}" alt="${pages[index].alt02}"/>
            <h1>${pages[index].alt02}</h1>
          </a>
        </div>
      </li>
      <li class="hex">
        <div class="hexIn">
          <a class="hexLink" href="#">
            <img src="${pages[index].img03}" data-toggle="modal" data-target="${pages[index].dataTarget03}" alt="${pages[index].alt03}"/>
            <h1>${pages[index].alt03}</h1>
          </a>
        </div>
      </li>
      <li class="hex">
        <div class="hexIn">
          <a class="hexLink" href="#">
            <img src="${pages[index].img04}" data-toggle="modal" data-target="${pages[index].dataTarget04}" alt="${pages[index].alt04}"/>
            <h1>${pages[index].alt04}</h1>
          </a>
        </div>
      </li>

           

            </div>



            </div
            `;

        }


        //Register buttons for click event
        for (let i = 0; i<ctrlBtns.length; i++){
            ctrlBtns[i].addEventListener('click', clickBtn);
        }


