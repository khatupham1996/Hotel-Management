import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
}

// export async function createEditCabin(newCabin, id) {
//   const hasImagePath = newCabin.image?.startsWith?.(supabase);
//   const imageName = `${Math.random()}-${newCabin.image.name}`.replace("/", "");
//   const imagePath = hasImagePath
//     ? newCabin.image
//     : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

//   // 1. Create cabin
//   let query = supabase.from("cabins");
//   if (!id) query.insert([{ ...newCabin, img: imagePath }]);
//   query
//     .insert([{ ...newCabin, image: imagePath }])
//     .select()
//     .single();
//   const { data, error } = await query.select().single();
//   if (error) {
//     console.error("Supabase error:", error);
//     throw new Error(
//       `Cabin could not be ${id ? "updated" : "created"}: ${error.message}`
//     );
//   }
//   // 1.1 Edit
//   if (id) {
//     query.update({ ...newCabin, image: imagePath }).eq("id", id);
//   }
//   // 2. Upload image to Supabase Storage
//   const { error: storageError } = await supabase.storage
//     .from("cabin-images")
//     .upload(imageName, newCabin.image);

//   // 3. Delete the cabin if image upload fails
//   if (storageError) {
//     await supabase.from("cabins").delete().eq("id", data[0].id);
//     throw new Error("Cabin image could not be uploaded — cabin was deleted");
//   }

//   return data;
// }
export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replace("/", "");
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1. Create or edit cabin
  let query = supabase.from("cabins");

  if (!id) {
    query = query.insert([{ ...newCabin, image: imagePath }]);
  } else {
    query = query.update({ ...newCabin, image: imagePath }).eq("id", id);
  }

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be created");
  }

  // 2. Upload image
  if (!hasImagePath) {
    const { error: storageError } = await supabase.storage
      .from("cabin-images")
      .upload(imageName, newCabin.image);

    // 3. Delete the cabin if image upload fails
    if (storageError) {
      await supabase.from("cabins").delete().eq("id", data.id);
      throw new Error("Cabin image could not be uploaded — cabin was deleted");
    }
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id); // this code take from API docs of delete cabins
  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }
  return data;
}
