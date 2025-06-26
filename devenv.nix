{ pkgs, lib, config, ... }:

{
  languages.javascript = {
    enable = true;
    pnpm = {
      enable = true;
      install.enable = true;
    };
  };

  packages = with pkgs; [typescript-language-server];
}

