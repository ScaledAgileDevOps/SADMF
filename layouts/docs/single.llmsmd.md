{{- $content := .RawContent -}}
{{- $content = replaceRE `\{\{[<%][^}]*?[%>]\}\}` "" $content -}}
{{- $content = replaceRE `(?m)^\s+$` "" $content -}}
# {{ .Title }}

URL: {{ .Permalink }}
{{ with .Description }}
> {{ . | safeHTML }}
{{ end }}
{{ $content | safeHTML }}
