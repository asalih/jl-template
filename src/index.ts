import { ILabShell, JupyterFrontEnd, JupyterFrontEndPlugin } from '@jupyterlab/application';
import { IThemeManager } from '@jupyterlab/apputils';
import { LabIcon, jupyterFaviconIcon, jupyterIcon, jupyterlabWordmarkIcon } from '@jupyterlab/ui-components';
import { Widget } from '@lumino/widgets';


const plugin: JupyterFrontEndPlugin<void> = {
    id: '@binalyze/jupyterlab-theme:plugin',
    requires: [IThemeManager, ILabShell],
    activate: (app: JupyterFrontEnd, manager: IThemeManager, shell: ILabShell) => {
        const style = '@binalyze/jupyterlab-theme/index.css';

        const binalyze_svg = '<?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 331.1 353.4" style="enable-background:new 0 0 331.1 353.4;" xml:space="preserve"><style type="text/css">.st0{fill:#293896;}</style><path class="st0" d="M0,11.1C0,3.7,3.2,0,9.8,0H32c6.5,0,9.7,3.7,9.7,11.1v118.4c17.3-13,43.5-19.5,78.5-19.5 c27.9,0,48.3,9.2,61.3,27.6c13,18.4,19.5,48.7,19.5,90.8c0,25.4-2.2,46.3-6.7,62.7c-4.5,16.4-11.7,29.2-21.6,38.3 c-9.9,9.1-21.4,15.4-34.4,18.8c-13,3.4-29.4,5.1-49.2,5.1c-28.2,0-51.5-3.3-70.1-9.8c-7.7-2.5-13-6.5-15.8-12.1 C1.1,327.5,0,321,0,312V11.1z M44.1,307.9c1.9,2.8,5.3,4.6,10.2,5.6c9.6,2.8,21.5,4.2,35.8,4.2c28.2,0,46.7-6,55.7-18.1 s13.5-34.7,13.5-67.8c0-31-3.4-52.8-10.2-65.5c-6.8-12.7-21.2-19-43.2-19c-26.3,0-45,3.7-56.2,11.1c-3.4,1.9-5.7,4-7,6.5 c-0.6,1.5-0.9,4.8-0.9,9.8v121.2C41.8,302,42.6,306,44.1,307.9z"/><path class="st0" d="M299.5,352c-20.4,0-30.6-10.5-30.6-31.6c0-21.7,10.4-32.5,31.1-32.5s31.1,10.8,31.1,32.5 C331.1,341.5,320.6,352,299.5,352z M307.4,243.3h-12.1c-8.7,0-13-4.2-13-12.5c-2.8-114.5-4.2-179.9-4.2-196 c0-10.2,4.2-15.3,12.5-15.3h20.9c8.4,0,12.5,4.8,12.5,14.4c0,16.4-1.5,82.3-4.6,197.8C319.5,239.5,315.5,243.3,307.4,243.3z"/></svg>';
        const binalyze_icon = new LabIcon({ name: 'ui-components:binalyze', svgstr: binalyze_svg });

        const logo = new Widget();
        binalyze_icon.element({
            container: logo.node,
            elementPosition: 'center',
            margin: '2px 2px 2px 8px',
            height: 'auto',
            width: '16px'
        });
        logo.id = 'jp-binalyzeLogo';
        shell.add(logo, 'top', { rank: 0 });

        jupyterFaviconIcon.svgstr = binalyze_svg;
        jupyterIcon.svgstr = binalyze_svg;
        jupyterlabWordmarkIcon.svgstr = binalyze_svg;

        manager.register({
            name: 'binalyze',
            isLight: true,
            themeScrollbars: true,
            load: () => manager.loadCSS(style),
            unload: () => Promise.resolve(undefined)
        });
    },
    autoStart: true
};

export default plugin;
