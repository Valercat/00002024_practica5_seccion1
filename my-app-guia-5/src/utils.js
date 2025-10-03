export function getImageUrl(person, size = 's') {
    if(person.imageId === "YfeOqp2")
    return (
        'https://upload.wikimedia.org/wikipedia/commons/5/51/Marie_Curie_%281900%29.jpg' +
        `?size=${size}x${size}`
    );
    if(person.imageId === "OKS67lh")
    return (
        'https://mujeresconciencia.com/app/uploads/2017/03/ksaru.jpg' +
        `?size=${size}x${size}`
    );
};