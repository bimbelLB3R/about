import { useState } from "react";
export default function Todo() {
  // Langkah kedua membuat state
  const [activity, setActivity] = useState("");
  const [todos, setTodos] = useState([]);
  // data bind dari tombol edit berupa objek shg usestatenya emty object
  const [edit, setEdit] = useState({});
  const [message, setMessage] = useState("");

  // fungsi untuk id
  function generateId() {
    return Date.now();
  }
  // langkah ketiga membuat fungsi form
  function saveTodoHandler(event) {
    event.preventDefault();
    // membuat validasi form
    if (!activity) {
      return setMessage("Nama Aktivitas jangan kosong");
    }
    setMessage("");
    // memberikan kondisi untuk tombol save
    if (edit.id) {
      const updatedTodo = {
        id: edit.id,
        activity,
        done: false,
      };
      // console.log(updatedTodo);
      // console.log(todos); berupa array, sehingga kita harus tahu todos yang mau kita edit berada di index berapa
      const editTodoIndex = todos.findIndex(function (todo) {
        return todo.id === edit.id;
      });
      // console.log(editTodoIndex);
      // cloning todos biar gak langsung edit di todos sourcenya
      const updatedTodos = [
        // ekstrak isi todos
        ...todos,
      ];
      // mengambil data dari todos sesuai dengan index di editTodoIndex
      // console.log(updatedTodos[editTodoIndex]);
      updatedTodos[editTodoIndex] = updatedTodo;
      // console.log(updatedTodos);
      setTodos(updatedTodos);
      setActivity("");
      return cancelEditHandler();
    }
    // cek apakah data form berhasil ditangkap
    // console.log(activity);
    // jika berhasil, maka tangkap ke fungsi setTodos, todos berupa array. Untuk menyimpan inputan sebelumnya, maka ditambah ...todos
    setTodos([
      ...todos,
      {
        // data yang berhasil ditangkap diberi id
        id: generateId(),
        activity: activity,
        // aktivitas sudah selesai/blm
        done: false,
      },
    ]);
    setMessage("");
    // untuk mengosongkan kembali field input
    setActivity("");
  }
  function removeTodoHandler(todoId) {
    // cek apakah id sudah didapat. todoId dibuat hanya untuk menampung data hasil bind.
    // console.log(todoId);
    // fungsi hapus menggunaklan filter. todos merupakan semua data yang akan difilter. Fungsi filter akan memproduksi array baru yang ditampung dalam todo. Sedangkan todoId merupakan id dari list yang mau dihapus. jika fungsi filteredTodos dijalankan, dia akan menampilkan data sesuai yg di return, yaitu dta yang id nya beda.
    const filteredTodos = todos.filter(function (todo) {
      return todo.id !== todoId;
    });
    setMessage("");
    // console.log(filteredTodos);
    // gant data todos dengan data baru hasil filter
    setTodos(filteredTodos);
    if (edit.id) cancelEditHandler();
  }
  // membuat fungsi edit todohandler
  function editTodoHandler(todo) {
    setMessage("");
    // cek isi todo
    // console.log(todo);
    // memunculkan activity kedalam inputan spy bisa diedit
    setActivity(todo.activity);
    // supaya tombol berubah, state edit diset
    setEdit(todo);
  }
  function cancelEditHandler() {
    setEdit({});
    setActivity("");
  }
  function doneTodoHandler(todo) {
    // console.log(todo);
    const updatedTodo = {
      id: todo.id,
      activity: todo.activity,
      done: todo.done ? false : true,
    };
    const editTodoIndex = todos.findIndex(function (currentTodo) {
      return currentTodo.id === todo.id;
    });
    // console.log(editTodoIndex);
    // cloning todos biar gak langsung edit di todos sourcenya
    const updatedTodos = [
      // ekstrak isi todos
      ...todos,
    ];
    updatedTodos[editTodoIndex] = updatedTodo;
    // console.log(updatedTodos);
    setTodos(updatedTodos);
  }

  // Langkah pertama membuat UI
  return (
    <div className="flex justify-center mt-5 ">
      <div>
        {/* menghilangkan elemen ketika idak ada pesan */}
        {message && <p className="text-red-800">{message}</p>}
        <form onSubmit={saveTodoHandler}>
          <input
            type="text"
            className="bg-gray-300 "
            value={activity}
            onChange={function (event) {
              setMessage("");
              // menangkap data dari input
              setActivity(event.target.value);
            }}
          />
          <button type="submit" className="bg-blue-500 text-white ">
            {/* jika ada edit, tombol berubah */}
            {edit.id ? "Simpan " : "Tambah"}
          </button>
          {edit.id && (
            <button
              className="bg-green-600 text-white"
              onClick={cancelEditHandler}
            >
              Batal
            </button>
          )}
        </form>
        {todos.length > 0 ? (
          <div>
            <ul>
              {todos.map(function (todo) {
                // todos setelah diberi id akan menjadi objek sehingga todo menjadi todo.activity
                return (
                  <li key={todo.id}>
                    <input
                      type="checkbox"
                      checked={todo.done}
                      onChange={doneTodoHandler.bind(this, todo)}
                    />
                    {todo.activity}
                    {todo.done ? "Selesai" : "Belum Selesai"}
                    {/* saat edit, semua data di todo diambil,dibind */}
                    <button onClick={editTodoHandler.bind(this, todo)}>
                      Edit
                    </button>
                    {/* untuk mendapatkan id tiap list, kita pakai bind */}
                    <button onClick={removeTodoHandler.bind(this, todo.id)}>
                      Hapus
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <p className="text-red-800">Tidak ada todo</p>
        )}
      </div>
    </div>
  );
}
