/**
 * Opens an image viewer for the specified container element.
 * 
 * @param {string} element - The ID of the container holding the images.
 */
function bigPicture(element) {
    const imageContainer = document.getElementById(element);
    const viewer = new Viewer(imageContainer, {
      inline: false, 
      toolbar: true,      
      tooltip: false,     
      hidden() {
        viewer.destroy();
      },
      navbar: false,       
      title: false,        
    });
    viewer.show();
}