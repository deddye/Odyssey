import React, { useState } from "react";
import { supabase } from "~/lib/utils/supabase/supabaseClient";

interface ProfilePictureModalProps {
  userId: string;
  open: boolean;
  onClose: () => void;
}

const ProfilePictureModal: React.FC<ProfilePictureModalProps> = ({
  userId,
  open,
  onClose,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files.item(0));
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const fileName = `${userId}/${Date.now()}-${selectedFile.name}`;
      await supabase.storage
        .from("profile_pictures")
        .upload(fileName, selectedFile)
        .catch((err) => {
          onClose();
          console.log(err);
        });

      // also need to add this fileName to the profile of userId
      const { data } = supabase.storage
        .from("profile_pictures")
        .getPublicUrl(fileName);
      const { error } = await supabase
        .from("profiles")
        .update({ profile_pic_url: data.publicUrl })
        .eq("id", userId);

      if (error) throw error;

      alert("Upload successful");
      setSelectedFile(null);
    }

    onClose();
  };

  const handleRemove = () => {
    console.log("removing");
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-96 rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-xl font-semibold">Update Profile Picture</h2>
        <div className="mb-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500 
                       file:mr-4 file:rounded-full file:border-0 
                       file:bg-blue-50 file:px-4 
                       file:py-2 file:text-sm 
                       file:font-semibold file:text-blue-700 
                       hover:file:bg-blue-100"
          />
          {selectedFile && (
            <p className="mt-2 text-sm text-gray-700">
              Selected file:{" "}
              <span className="font-medium">{selectedFile.name}</span>
            </p>
          )}
        </div>
        <div className="space-y-2">
          <button
            onClick={handleUpload}
            disabled={!selectedFile}
            className={`w-full rounded-md py-2 font-semibold text-white ${
              selectedFile
                ? "bg-blue-600 hover:bg-blue-700"
                : "cursor-not-allowed bg-gray-400"
            }`}
          >
            Upload New Picture
          </button>
          <button
            onClick={handleRemove}
            className="w-full rounded-md bg-red-600 py-2 font-semibold text-white hover:bg-red-700"
          >
            Remove Current Picture
          </button>
          <button
            onClick={onClose}
            className="w-full rounded-md bg-gray-200 py-2 font-semibold text-gray-800 hover:bg-gray-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePictureModal;
