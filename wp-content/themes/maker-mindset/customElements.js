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
	 
class MakerSpotlight extends HTMLElement {
        constructor() {
            super();
            // Define default maker and creation
            this.makerName = "Anonymous Maker";
            this.creationName = "Untitled Creation";
        }

        // Setter methods for maker and creation names
        set maker(name) {
            this.makerName = name;
            this.render();
        }

        set creation(name) {
            this.creationName = name;
            this.render();
        }

        // Render method to update element content
        render() {
            this.innerHTML = `
                <div>
                    <h2>Maker Spotlight</h2>
                    <p>Featured Maker: ${this.makerName}</p>
                    <p>Featured Creation: ${this.creationName}</p>
                </div>
            `;
        }

        // Called when element is added to the DOM
        connectedCallback() {
            this.render();
        }
    }

    customElements.define("maker-spotlight", MakerSpotlight);