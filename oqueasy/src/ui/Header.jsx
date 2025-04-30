import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
export default function Header({
  setCards,
  createPressed,
  setCreatePressed,
  newCard,
  setNewCard,
}) {
  return (
    <div className="flex flex-col bg-white py-4 pb-0">
      <div className="flex flex-row items-center justify-between w-full pb-4 px-4">
        <h1 className="text-xl font-semibold text-gray-800 pl-6">
          My Flashcards
        </h1>
        <Dialog className="p-0">
          <DialogTrigger asChild>
            <button
              onClick={() => setCreatePressed(true)}
              className="font-lg font-medium text-sm px-4 py-2 bg-violet-500 text-white rounded-md"
            >
              Create New
            </button>
          </DialogTrigger>
          <DialogContent className="p-0">
            <DialogHeader>
              <DialogTitle className="p-6 text-xl pb-4">
                Create New Flashcard Deck
              </DialogTitle>
              <hr className="h-[2px] bg-gray-200"></hr>
            </DialogHeader>
            <div className="p-6 flex flex-col gap-4 pt-4">
              <div className="flex flex-col gap-1">
                <p className="text-sm text-gray-700 font-medium">Deck Title</p>
                <input
                  type="text"
                  placeholder="Enter card title"
                  name="title"
                  value={newCard.title}
                  onChange={(e) => {
                    const copyCard = { ...newCard };
                    copyCard.title = e.target.value;
                    setNewCard(copyCard);
                  }}
                  className="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">
                  Category
                </label>
                <select
                  value={newCard.tags[0]}
                  onChange={(e) => {
                    const copyCard = { ...newCard };
                    copyCard.tags[0] = e.target.value;
                    setNewCard(copyCard);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none bg-gray-200"
                >
                  <option value={"Mechanics"}>Mechanics</option>
                  <option value={"Kinematics"}>Kinematics</option>
                  <option value={"Optics"}>Optics</option>
                </select>
              </div>

              <div className="">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Difficulty
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="difficulty"
                      className="h-4 w-4 text-purple-600"
                      value={"Beginner"}
                      checked={newCard.difficulty === "Beginner"}
                      onChange={() => {
                        const copyCard = { ...newCard };
                        copyCard.difficulty = "Beginner";
                        setNewCard(copyCard);
                      }}
                    />
                    <span className="ml-2 text-sm text-gray-700">Beginner</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="difficulty"
                      className="h-4 w-4 text-purple-600"
                      checked={newCard.difficulty === "Intermediate"}
                      onChange={() => {
                        const copyCard = { ...newCard };
                        copyCard.difficulty = "Intermediate";
                        setNewCard(copyCard);
                      }}
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      Intermediate
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="difficulty"
                      className="h-4 w-4 text-purple-600"
                      checked={newCard.difficulty === "Advanced"}
                      onChange={() => {
                        const copyCard = { ...newCard };
                        copyCard.difficulty = "Advanced";
                        setNewCard(copyCard);
                      }}
                    />
                    <span className="ml-2 text-sm text-gray-700">Advanced</span>
                  </label>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">
                  Description (Optional)
                </label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none h-24"
                  placeholder="Enter a description for this deck"
                  value={newCard.description}
                  onChange={(e) => {
                    const copyCard = { ...newCard };
                    copyCard.description = e.target.value;
                    setNewCard(copyCard);
                  }}
                ></textarea>
              </div>
            </div>
            <hr className="h-[2px] bg-gray-200"></hr>
            <div className="flex justify-end gap-2 p-6 pt-2">
              <DialogClose asChild>
                <buttton className="text-sm font-medium border border-gray-400 rounded-lg px-4 py-2 cursor-pointer hover:bg-gray-100">
                  Cancel
                </buttton>
              </DialogClose>
              <DialogClose asChild>
                <button
                  onClick={() => {
                    setNewCard({
                      title: "",
                      tags: ["Mechanics"],
                      completion: 0,
                      accuracy: 0,
                      cards: 0,
                      difficulty: "Intermediate",
                      last_edit: "5 minutes ago",
                      description: "",
                    });
                    setCards((prev) => [...prev, newCard]);
                  }}
                  className="text-sm font-medium text-gray-50 bg-violet-500 rounded-lg px-4 py-2 cursor-pointer hover:bg-violet-600"
                >
                  Create
                </button>
              </DialogClose>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <hr className="w-full h-[2px] bg-gray-300" />
    </div>
  );
}
