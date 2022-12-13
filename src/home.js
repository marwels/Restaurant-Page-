import { Button } from './DOMcomponents/Button';

const PageHome = function PageHome(targetEl) {

    document.body.className = "home";

    let homeContainer = document.createElement("div");
    homeContainer.classList.add("homeContainer");

    let textDivWrappar = document.createElement("div");
    textDivWrappar.classList.add("textDivWrappar");

    let title = document.createElement("h1");
    title.classList.add("title");
    title.innerText = "Our journey to artisan bakery";
    textDivWrappar.appendChild(title);

    let text = document.createElement("p");
    text.classList.add("text");
    text.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a ullamcorper urna, sit amet ornare ex. Donec ut risus malesuada, congue ipsum a, posuere libero. Suspendisse facilisis dui quis viverra tempus. Nullam maximus placerat lorem, nec pharetra nunc molestie quis. Aenean nec vestibulum dui. Curabitur sit amet laoreet lorem, quis interdum ligula. Nunc semper lorem lorem, at tristique risus tempus ac. Donec id turpis vel odio semper facilisis a at massa. Nullam non imperdiet magna. Quisque euismod erat ac cursus ultricies. Etiam lacinia aliquet quam, non interdum orci. Aliquam erat volutpat. Etiam vestibulum pharetra est, non semper diam varius vel. Proin non nunc non neque pretium hendrerit. Curabitur quam dolor, maximus sit amet tincidunt eu, porta sed nisi. Mauris eu ligula nec nisl condimentum efficitur. "
    textDivWrappar.appendChild(text);

    Button(textDivWrappar, "readMore", "READ MORE", () => { alert("Here would be more information, if it were a real website") });

    homeContainer.appendChild(textDivWrappar);
    targetEl.appendChild(homeContainer);


    return () => {
        targetEl.removeChild(homeContainer);
    }
}


export { PageHome };