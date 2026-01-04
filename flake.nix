{
  description = "Portfolio development environment";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
    jailed-agents.url = "path:/home/anderson/projects/jailed-agents";
  };

  outputs = { nixpkgs, jailed-agents, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            nodejs_22
            pnpm
            typescript
            typescript-language-server

	    (jailed-agents.lib.${system}.makeJailedOpencode {
	       extraPkgs = [
		  nodejs_22
		  pnpm
		  typescript
	       ];
	     })
          ];
        };
      }
    );
}
