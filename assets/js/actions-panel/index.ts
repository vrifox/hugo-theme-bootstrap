import Component from "js/component";
import Snackbar from "js/snackbar";

class ActionsPanel implements Component {
  private btn: HTMLElement;

  public x: number = 0;

  public y: number = 0;

  constructor() {
    const btn = document.createElement('a');
    btn.setAttribute('role', 'button');
    btn.setAttribute('aria-label', 'Actions panel toggle');
    btn.setAttribute('data-bs-toggle', 'offcanvas');
    btn.setAttribute('data-bs-target', '#offcanvasActionsPanel');
    btn.className = 'btn btn-sm btn-primary btn-actions-panel position-fixed p-1';
    btn.innerHTML = '<i class="fas fa-fw fa-atom fa-2x"></i>';
    window.document.body.append(btn);
    this.btn = btn;
  }

  run() {
    document.querySelector('.action-reload-page').addEventListener('click', function() {
        window.location.reload();
    });
    document.querySelector('.action-copy-url').addEventListener('click', function() {
        navigator.clipboard.writeText(window.location.href);
        Snackbar.show('Copied');
    });
  }
}

export default ActionsPanel;
