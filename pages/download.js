function DownloadFile(e,n,o){if(null!==e||null!==n||null!==o){var t=navigator.connection.type;t!=Connection.NONE&&download(e,n,o)}}function download(e,n,o){function t(t){var a=encodeURI(e);ext=a.substr(a.lastIndexOf(".")+1);var c=t.root;c.getDirectory(n,{create:!0,exclusive:!1},r,l);var i=t.root,u=i.fullPath;u=u+"/"+n+"/"+o+"."+ext,filetransfer(a,u)}function r(){}function l(e){alert("Unable to create new directory: "+e.code)}function a(e){alert(e.target.error.code)}window.requestFileSystem(LocalFileSystem.PERSISTENT,0,t,a)}function filetransfer(e,n){var o=new FileTransfer;o.download(e,n,function(e){alert("download complete: "+e.fullPath)},function(e){alert("download error source "+e.source)})}