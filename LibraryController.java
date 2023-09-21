package com.demo.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.demo.model.Librarymodel;
import com.demo.repository.Libraryinterface;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("library/")
public class LibraryController 
{
 
	
  @Autowired
  private Libraryinterface lint;
  
  @GetMapping("view")
  public List<Librarymodel> view()
  {
	  return this.lint.findAll();
  }
  @PostMapping("insert")
  public Librarymodel insertbook(@RequestBody Librarymodel lm)
  {
	return this.lint.save(lm);
	  
  }
  @PostMapping("delete")
  @CrossOrigin(origins="http://localhost:4200")
  public void deletebook(@RequestBody Librarymodel id)
  {
	this.lint.delete(id);
	  
  }
  @PostMapping("update")
  @CrossOrigin(origins="http://localhost:4200")
  public void updatebook(@RequestBody Librarymodel lm)
  {
	lint.save(lm);
	  

}}