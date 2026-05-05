class Navbar extends HTMLElement {
    connectedCallback() {
        let currentPath = window.location.pathname.split('/').pop();
        if (currentPath === '') currentPath = 'index.html';

        const navItems = [
            { id: 'index.html', name: 'Inicio', href: './index.html' },
            { id: 'catalogo.html', name: 'Catálogo', href: './catalogo.html' },
            { id: 'aboout.html', name: 'Nosotros', href: './aboout.html' },
            { id: 'contact.html', name: 'Contacto', href: './contact.html' }
        ];

        const renderLinks = () => navItems.map(item => {
            const isActive = currentPath === item.id;
            const className = isActive 
                ? "text-primary font-bold" 
                : "text-neutral-500 hover:text-primary transition-colors";
            return `<a class="${className}" href="${item.href}">${item.name}</a>`;
        }).join('');

        this.innerHTML = `
        <nav class="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100 transition-all duration-300">
            <div class="flex justify-between items-center h-14 md:h-16 px-4 md:px-12 max-w-7xl mx-auto">
                <a href="./index.html" class="flex items-center gap-2">
                    <img src="./logo.png" alt="Agroquímicos Darío Logo" class="h-10 w-auto" />
                    <span class="text-xl font-bold tracking-tight text-primary font-headline-sm hidden sm:block">Agroquímicos Darío</span>
                </a>
                <div class="hidden md:flex items-center gap-10 font-manrope text-sm font-medium">
                    ${renderLinks()}
                </div>
                <a href="./contact.html" class="bg-primary text-on-primary px-3 py-1.5 md:px-5 md:py-2 rounded-full font-label-bold text-[10px] md:text-xs uppercase hover:bg-primary/90 transition-all inline-block">
                    Presupuesto
                </a>
            </div>
        </nav>
        `;
    }
}
customElements.define('custom-navbar', Navbar);
