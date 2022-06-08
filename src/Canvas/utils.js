export function getBoundPosition(img, viewport) {

    const bounds = img.getBoundingClientRect();

    const y = - (bounds.top + window.scrollY) + viewport.height / 2 - bounds.height / 2;
    const x = bounds.left - viewport.width / 2 + bounds.width / 2;

    return {
        x,
        y,
        width: bounds.width,
        height: bounds.height
    }
}

