var $fileInput = $('.file-input')
var $fileUploadLabel = $('.file-label');

// Changes the label text 
$fileInput.on('change', function() {
    
    var fileName = '';
    
    if (this.files && this.files.length > 1) {
        // If multiple files are being uploaded, prepare a label detailing the
        // number of files selected
        fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
    } else {
        // If a single file was selected, print file name (removing preceeding 
        // directories).
        fileName = this.value.split('\\').pop();
    }
    
    if (fileName) {
        $fileUploadLabel.text(fileName);
        $fileUploadLabel.addClass('file-label-ready');
    } else {
        // If no file was selected, reset the label to the default 
        $fileUploadLabel.text('Choose a file');
        $fileUploadLabel.removeClass('file-label-ready');
    }
});