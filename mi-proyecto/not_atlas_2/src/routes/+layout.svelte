<script lang="ts">
</script>



<nav>
	<div class=logo>
		<img src="/fotos/logo_naa.png" alt="Atlas Logo" width="50" height="40">
		<h1>THIS IS NOT AN ATLAS</h1>
	</div>

	<ul>
		<li>
			<a href="/maps" >
				MAPS
			</a>
		</li>
		<li>
			<a href="/book">
				BOOK
			</a>
		</li>
		<li>
			<a href="/news">
				NEWS
			</a>
		</li>
		<li>
			<a href="/videos">
				VIDEOS
			</a>
		</li>
		<li>
			<a href="/">
				ABOUT
			</a>
		</li>
		</ul>
</nav>
<slot />




<style>

	h1{
		margin:0;
		font-size: 1.5em;
		font-weight: bolder;
	}

	nav {
		display: flex;
		background-color: black;
		color: white;
		padding: 10px;
		position: sticky;
		top: 0;
	}

	nav a{
		color: white;
		text-decoration: none;
	}

	ul {
		display: flex;
		list-style: none;
		margin: 0;
		margin-left: auto;
		align-items: center;
	}

	li{
		margin-right: 20px;
		font-size: 1.2em;
		font-weight: bolder;
	}

	.logo {
		margin-right: 10px;
		margin-left: 60px;
		display: flex;
		align-items: center;
		gap: 10px;
	}



</style>