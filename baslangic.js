
// Define the tour!
var baslangic = {
    id: "container",
    steps: [
        {
            title: "Baslangic",
            content: "Içeri girmek için tıkla",
            target: "start_btn",
            placement: "bottom"
        },
        {
            title: "Helix görüşünü",
            content: "Helix efekti için görüntüye tıkla.",
            target: "gorsel_b",
            placement: "top"
        },
        {
            title: "Sphere görünüşü",
            content: "Sphere efekti için görüntüye tıkla.",
            target: "gorsel_a",
            placement: "top"
        }

    ]
};

// Start the tour!
hopscotch.startTour(baslangic);
