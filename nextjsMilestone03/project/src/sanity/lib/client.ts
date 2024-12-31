import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})



//   for (const item of data) {
//     try {
//       const doc = {
//         _type: "string", // Replace with your schema type
//         title: item.title,
//         description: item.description,
//         image: {
//           _type: 'image',
//           asset: {
//             _ref: `image-${item.imageId}`, // Optional: handle images from the API
//           },
//         },
//       };

//       await client.createOrReplace(doc);
//       console.log(`Uploaded: ${item.title}`);
//     } catch (error) {
//       console.error('Error uploading data:', error);
//     }
//   }
// }

// (async () => {
//   const data = await fetchDataFromAPI();
//   await uploadDataToSanity(data);
// })();