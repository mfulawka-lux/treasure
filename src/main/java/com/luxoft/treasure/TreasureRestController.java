package com.luxoft.treasure;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.luxoft.treasure.Borad;

@RestController
class TrerasureRestController {
  
	@CrossOrigin(origins = "http://localhost:3000")
  @GetMapping("/getFromBoard")
  String[] getFromBoard(@RequestParam int[] fields) {
    return Borad.getBoardFields(fields);
  }

  @CrossOrigin(origins = "http://localhost:3000")
  @GetMapping("/getHiScores")
  String[] getHiScores() {
    String[] scores = {"Mat 1", "Pat 2", "Ulf 3"};
    return scores;
  }
}