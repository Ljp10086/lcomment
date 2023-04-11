<svelte:options tag="lcomment-editor" accessors={true} />

<script lang="ts">
  import { onMount } from 'svelte';
  import GithubIcon from './assets/github.svg'
  import GithubApi from './api-github';

  export let cid: string;
  export let secret: string;
  export let owner: string;
  export let repo: string;

  let githubApi: GithubApi;

  onMount(() => {
    console.log({
      state:'lcomment',
      owner: owner,
      repo: repo,
      clientId: cid,
      clientSecret: secret
    });

    githubApi = new GithubApi({
      state:'lcomment',
      owner: owner,
      repo: repo,
      clientId: cid,
      clientSecret: secret
    });
  })
</script>

<main class="lcomment">
  <div class="lcomment_header">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-missing-attribute -->
    <a on:click={githubApi.login} class="lcomment_avatar">
      <img src={GithubIcon} alt="fail load">
    </a>
    <div class="lcomment_header_editor">
      <textarea 
        class="lcomment_header_editor_input" 
        placeholder="leave a comment" 
        cols="30" 
        rows="10"></textarea>
    </div>
  </div>
  
</main>

<style lang="scss">
  .lcomment {
    --lcomment-editor-text-color: #50505c;
    --lcomment-editor-input-hover: #f7f7f7;
    --lcomment-editor-border-color: #d3d3d3;

    width: 100%;

    &, & * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    &_header {
      display: flex;
      gap: 1rem;

      &_editor {
        flex: 1;
        padding: 0.5rem;
        border: 1px solid var(--lcomment-editor-border-color);
        border-radius: .5rem;

        &_input {
          width: 100%;
          min-height: 150px;
          padding: 0.5rem;
          border: none;
          background-color: transparent;
          color: var(--lcomment-editor-text-color);
          border-radius: .5rem;
          outline: none;
          transition: background-color .25s ease;
          resize: vertical;

          &:focus, 
          &:hover {
            background-color: var(--lcomment-editor-input-hover);
          }

          &:disabled {
            pointer-events: none;
            background-color: var(--lcomment-editor-input-hover);
            cursor: not-allowed;
          }
        }
      }
    }

    &_avatar {
      width: 2.5rem;
      height: 2.5rem;
      display: inline-block;
      border-radius: 50%;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
