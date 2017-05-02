var $fileInput = $('.file-input')
var $fileUploadLabel = $('.file-label');

// Changes the label to the file name when 
$fileInput.on('change', function() {
    
    var fileName = '';
    
    if (this.files && this.files.length > 1) {
        fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
    } else {
        fileName = this.value.split('\\').pop();
    }
    
    if (fileName) {
        $fileUploadLabel.text(fileName);
    } else {
        $fileUploadLabel.text('Choose a file');
    }
});