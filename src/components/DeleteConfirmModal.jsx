const DeleteConfirmModal = ({ user, setIsDeleteOpen, deleteUserMutation }) => {
  if (!user) return;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white w-100 px-6 py-4 rounded shadow-lg ">
        <h1 className="border-b">Delete user</h1>
        <p className="mt-5">Are you sure?</p>

        <div className="flex justify-evenly mt-10">
          <button
            onClick={() => setIsDeleteOpen(false)}
            className="bg-blue-300 cursor-pointer px-2 py-1 font-bold  rounded hover:bg-blue-600 hover:text-white"
          >
            Cancle
          </button>
          <button
            onClick={() => {
              deleteUserMutation(user._id);
              setIsDeleteOpen(false);
            }}
            className="bg-red-300 cursor-pointer px-2 py-1 font-bold  rounded hover:bg-red-600 hover:text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
