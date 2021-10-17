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
<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>

<nav class="bg-blue-900 shadow-lg">
	<div class="container mx-auto">
	  <div class="sm:flex">
		<a href="#" class="text-white text-3xl font-bold p-3">APP LOGO</a>
		
		<!-- Menus -->
		<div class="ml-55 mt-4">
		  <ul class="text-white sm:self-center text-xl">
			<li class="sm:inline-block">
			  <a href="#" class="p-3 hover:text-red-900">About</a>
			</li>
			<li class="sm:inline-block">
			  <a href="#" class="p-3 hover:text-red-900">Services</a>
			</li>
			<li class="sm:inline-block">
			  <a href="#" class="p-3 hover:text-red-900">Blog</a>
			</li>
			<li class="sm:inline-block">
			  <a href="#" class="p-3 hover:text-red-900">Contact</a>
			</li>
		  </ul>
		</div>
  
	  </div>
	</div>
  </nav>

<main>
	<p class="bg-red-500 w-20 p-10">Hello {name}!</p>
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


