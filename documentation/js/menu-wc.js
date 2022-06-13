'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">carlos-inmuebles documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-3e4c7aeef8ab53fa252006c8cf0aa0fb328c5550612ded4f652e88864305967401d0dbe09fcecd06a9f6d90f585c22e805dc1f7c1f71fffd85c7e0c647ed3b3f"' : 'data-target="#xs-components-links-module-AppModule-3e4c7aeef8ab53fa252006c8cf0aa0fb328c5550612ded4f652e88864305967401d0dbe09fcecd06a9f6d90f585c22e805dc1f7c1f71fffd85c7e0c647ed3b3f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-3e4c7aeef8ab53fa252006c8cf0aa0fb328c5550612ded4f652e88864305967401d0dbe09fcecd06a9f6d90f585c22e805dc1f7c1f71fffd85c7e0c647ed3b3f"' :
                                            'id="xs-components-links-module-AppModule-3e4c7aeef8ab53fa252006c8cf0aa0fb328c5550612ded4f652e88864305967401d0dbe09fcecd06a9f6d90f585c22e805dc1f7c1f71fffd85c7e0c647ed3b3f"' }>
                                            <li class="link">
                                                <a href="components/AdministradorRegistroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdministradorRegistroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BalanceAyudaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BalanceAyudaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BalanceListaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BalanceListaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BalanceXAnioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BalanceXAnioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BalanceXInmuebleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BalanceXInmuebleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BalanceXMesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BalanceXMesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClienteDetalleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClienteDetalleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClienteListaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClienteListaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClienteRegistroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClienteRegistroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ComoFuncionaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ComoFuncionaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContratoAyudaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContratoAyudaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContratoDetalleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContratoDetalleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContratoListaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContratoListaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContratoRegistroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContratoRegistroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EntidadesAyudaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EntidadesAyudaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InGaAyudaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InGaAyudaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InGaInicioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InGaInicioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IngaDetalleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IngaDetalleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IngaRegistroGeneralComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IngaRegistroGeneralComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IngresoRegistroGeneralComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IngresoRegistroGeneralComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InicioAyudaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InicioAyudaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InicioListaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InicioListaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InmuebleDetalleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InmuebleDetalleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InmuebleListaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InmuebleListaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InmueblesAyudaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InmueblesAyudaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InmueblesRegistroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InmueblesRegistroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IntervinienteDetalleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IntervinienteDetalleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IntervinienteListaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IntervinienteListaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IntervinienteRegistroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IntervinienteRegistroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginNavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginNavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModificacionTiposComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ModificacionTiposComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavAppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavAppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PeriodoListaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PeriodoListaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PeriodoRegistroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PeriodoRegistroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PreciosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PreciosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PubliInicioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PubliInicioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QuienessomosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QuienessomosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RolListaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolListaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RolRegistroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolRegistroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SliderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SliderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TipoCategoriaListaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TipoCategoriaListaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TipoCategoriaRegistroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TipoCategoriaRegistroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TipoCoceptoListaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TipoCoceptoListaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TipoConceptoRegistroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TipoConceptoRegistroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TipoContratoListaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TipoContratoListaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TipoContratoRegistroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TipoContratoRegistroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TipoInmuebleListaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TipoInmuebleListaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TipoInmuebleRegistroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TipoInmuebleRegistroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TipoIntervinienteListaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TipoIntervinienteListaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TipoIntervinienteRegistroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TipoIntervinienteRegistroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TipoPagoListaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TipoPagoListaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TipoPagoRegistroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TipoPagoRegistroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TiposAyudaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TiposAyudaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TiposComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TiposComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsuarioAyudaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsuarioAyudaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsuarioDetalleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsuarioDetalleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsuarioListaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsuarioListaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsuarioRegistroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsuarioRegistroComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/Globales.html" data-type="entity-link" >Globales</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PermisosService.html" data-type="entity-link" >PermisosService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/tiposService.html" data-type="entity-link" >tiposService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/clienteInterface.html" data-type="entity-link" >clienteInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/contratoInterface.html" data-type="entity-link" >contratoInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ingresogastodetalleinterface.html" data-type="entity-link" >ingresogastodetalleinterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ingresogastointerface.html" data-type="entity-link" >ingresogastointerface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/inmuebleInterface.html" data-type="entity-link" >inmuebleInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/intervinienteInterface.html" data-type="entity-link" >intervinienteInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/usuarioInterface.html" data-type="entity-link" >usuarioInterface</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});