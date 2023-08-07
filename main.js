async function getACuteDogPhoto() {
    const res = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await res.json()
    console.log(data)
    try {
        var fetch = await res();
        console.log(data);
    } catch (error) {
        console.error(err);
    }
}
console.log(getACuteDogPhoto)

// async function getACuteDogPhoto() {
//   try {
//     const res = await fetch('https://dog.ceo/api/breeds/image/random');
//     const data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//     // Fix the variable name to "error"
//   }
// }

// getACuteDogPhoto();
// Call the function to see the output


// Error
// getACuteDogPhoto('random')