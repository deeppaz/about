
// Define the tour!
var baslangic = {
    id: "container",
    steps: [
        {
            title: "Baslangic",
            content: "Içeri girmek için tıkla",
            target: "start_btn",
            placement: "right"
        },
        {
            title: "Oynat",
            content: "Mouse sol tık(LMB) ve sağ & sol yap.",
            target: "yonlen",
            placement: "bottom"
        },
        {
            title: "Sphere görünüşü",
            content: "Sphere efekti için görüntüye tıkla.",
            target: "gorsel_a",
            placement: "right"
        },
        {
            title: "Helix görüşünü",
            content: "Helix efekti için görüntüye tıkla.",
            target: "gorsel_b",
            placement: "left"
        }
    ]
};

// Start the tour!
hopscotch.startTour(baslangic);
