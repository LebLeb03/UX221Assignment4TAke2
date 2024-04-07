class CopyrightYear extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", CopyrightYear);

class TheMakerMindset extends HTMLElement{
	ConnectedCallback(){
		this.innerHTML = "The Maker Mindset 2024"
	}
}
CustomElements.define("x-Maker",TheMakerMindset)

 class JoinNowButton extends HTMLElement {
        constructor() {
            super();
            // Create a shadow root
            this.attachShadow({ mode: 'open' });

            // Define button text (default: 'Join Now')
            this.buttonText = this.getAttribute('text') || 'Join Now';
        }