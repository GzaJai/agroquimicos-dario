class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="bg-neutral-50 border-t border-neutral-100">
            <div class="max-w-7xl mx-auto px-6 md:px-12 py-10">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
                    <div class="col-span-1 lg:col-span-1">
                        <div class="text-base font-bold text-neutral-900 mb-3">Agroquímicos Darío</div>
                        <p class="text-neutral-500 text-xs leading-relaxed max-w-xs">
                            Soluciones integrales para el campo en la región de Cuyo. Calidad, trayectoria y respaldo.
                        </p>
                    </div>
                    <div class="space-y-3">
                        <p class="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Navegación</p>
                        <ul class="text-xs space-y-2 text-neutral-600">
                            <li><a class="hover:text-primary transition-colors" href="./index.html">Inicio</a></li>
                            <li><a class="hover:text-primary transition-colors" href="./catalogo.html">Catálogo</a></li>
                            <li><a class="hover:text-primary transition-colors" href="./aboout.html">Nosotros</a></li>
                            <li><a class="hover:text-primary transition-colors" href="./contact.html">Contacto</a></li>
                        </ul>
                    </div>
                    <div class="col-span-1 lg:col-span-2 space-y-3">
                        <p class="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Newsletter</p>
                        <div class="flex max-w-sm">
                            <input class="bg-white border-neutral-200 text-xs px-4 py-2 w-full rounded-l-md focus:ring-0 focus:border-primary outline-none" placeholder="Email" type="email"/>
                            <button class="bg-primary text-white px-4 py-2 rounded-r-md">
                                <span class="material-symbols-outlined !text-sm" data-icon="send">send</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="pt-8 border-t border-neutral-200 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div class="text-neutral-400 text-[10px] uppercase font-medium tracking-wider">
                        © 2026 Agroquímicos Darío. Mendoza, Argentina.
                    </div>
                    <div class="flex gap-5">
                        <a class="text-neutral-400 hover:text-primary transition-colors" href="#"><span class="material-symbols-outlined !text-lg" data-icon="share">share</span></a>
                        <a class="text-neutral-400 hover:text-primary transition-colors" href="#"><span class="material-symbols-outlined !text-lg" data-icon="verified">verified</span></a>
                    </div>
                </div>
            </div>
        </footer>
        `;
    }
}
customElements.define('custom-footer', Footer);
