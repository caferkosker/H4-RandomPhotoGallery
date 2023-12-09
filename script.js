var pictures = document.getElementById("pictures")

for (i=0;i<10; i++){
    pictures[i].src = "https://source.unsplash.com/random/300x300?random=" + i
}