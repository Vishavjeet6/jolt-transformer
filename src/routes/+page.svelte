
<script>
  import { onMount } from "svelte";
  let input1 = `{
  "alldetails": {
    "classid": 1,
    "schoolid": 3
  }
}`;
  let input2 = `[
  {
    "operation": "shift",
    "spec": {
      "alldetails": {
        "classid": {
          "#Id_class": "data[0].source",
          "@(1,classid)": "data[0].value"
        },
        "teacherid": {
          "#Id_teacher": "data[1].source",
          "@(1,teacherid)": "data[1].value"
        },
        "schoolid": {
          "#Id_school": "data[2].source",
          "@(1,schoolid)": "data[2].value"
        }
      }
    }
  },
  {
    "operation": "modify-overwrite-beta",
    "spec": {
      "*": "=recursivelySquashNulls"
    }
  }
]`;
  let output = '';
  const options = { indent_size: 2, space_in_empty_paren: true }

  function updateOutput() {
    output = '';
    const requestBody = `{
    "jsonspec": ${input2},
    "jsoninput": ${input1}
  }`;
    fetch('https://jolt-api.onrender.com/api/processData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: requestBody,
    })
      .then((response) => response.json())
      .then((data) => {
        output = js_beautify(JSON.stringify(data), options);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

    // This function ensures that the server is running when the component is mounted
    onMount(() => {
    fetch('https://jolt-api.onrender.com/api/ping'); // Simply fetch the server to start it
    updateOutput();
  });
</script>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  h1 {
    font-family: 'Arial', sans-serif;
    color: #333;
  }

  label {
    margin-top: 16px;
    font-size: 16px;
    color: #555;
  }

  textarea {
    flex: 1;
    width: 80%;
    max-width: 600px;
    padding: 8px;
    margin: 8px;
    resize: vertical;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
  }

  button {
    padding: 10px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }

  button:hover {
    background-color: #45a049;
  }

  label[for="output"] {
    margin-top: 16px;
  }

  textarea[readonly] {
    background-color: #f5f5f5;
    color: #333;
  }
</style>

<main>
  <h1>Jolt Transformer v0.1.6</h1>
  It might take few seconds to spin up the backend, wait for the default output :)

  <label for="input1">Input Json:</label>
  <textarea id="input1" bind:value={input1}></textarea>

  <label for="input2">Spec:</label>
  <textarea id="input2" bind:value={input2}></textarea>

  <button on:click={updateOutput}>Output</button>

  <label for="output">Output Json:</label>
  <textarea id="output" bind:value={output} readonly></textarea>
</main>
