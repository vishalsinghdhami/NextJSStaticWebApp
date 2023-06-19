
const EmbedMap = () => {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: `
            <div class="mapouter">
              <div class="gmap_canvas">
                <iframe
                  width="100%"
                  height="100%"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=Telamgana&t=&z=9&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
                
              </div>
            </div>
            <style>
              .mapouter {
                position: relative;
                text-align: right;
                height: 100%;
                width: 100%;
              }
              .gmap_canvas {
                overflow: hidden;
                background: none!important;
                height: 100%;
                width: 100%;
              }
            </style>
          `,
        }}
      />
    );
  };
  
  export default EmbedMap;
  