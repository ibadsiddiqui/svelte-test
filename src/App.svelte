<script>
	let firstName = "";
	let lastName = "";
	let color = "red";
	let showText = true;
	let users = [
		{
			id: "1",
			name: "ibad",
		},
		{
			id: "2",
			name: "ibad",
		},
		{
			id: "3",
			name: "ibad",
		},
		{
			id: "4",
			name: "ibad",
		},
	];

	$: name = firstName + " " + lastName;

	function setFirstName(ev) {
		ev.preventDefault();
		firstName = ev.target.value;
	}
	function setLastName(ev) {
		ev.preventDefault();

		lastName = ev.target.value;
	}

	function toggleShowText() {
		// color = color === "blue" ? "red" : "blue";
		// showText = !showText;
		if (name.trim()) {
			users = [
				...users,
				{
					id: users.length,
					name: name,
				},
			];
		}
	}
</script>

<main>
	<p class="text-center">Hello {name}!</p>
	<input on:change={setFirstName} bind:value={firstName} />
	<input on:change={setLastName} bind:value={lastName} />
	{#if showText}
		<p>
			Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to
			learn how to build Svelte apps.
		</p>
	{:else}
		<p>No Text</p>
	{/if}
	<button on:click={toggleShowText}>Click</button>
	{#each users as user, index}
		<h3>{user.id}: {user.name}</h3>
	{/each}
</main>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
